from flask import Blueprint, render_template, session, redirect, url_for, request, jsonify
from sqlalchemy import desc
from app.forms import CreateCommentForm, EditCommentForm, CreateTagForm
from app.models import comment, db, Comment
from app.api.utils import validation_errors_to_error_messages

comments_routes = Blueprint('comments', __name__)

@comments_routes.route('/<int:postId>/', methods=['GET'])
def get_comments(postId):
    comments = Comment.query.filter(Comment.postId == postId).order_by(desc(Comment.createdAt)).all()
    comments = [comment.to_dict() for comment in comments]
    return jsonify(comments)


@comments_routes.route('/<int:postId>/', methods=['POST'])
def add_comment(postId):
    form = CreateCommentForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        print('\n\n\n IN VALIDATE \n\n\n')
        data = {
            'userId': session['_user_id'],
            'postId': postId,
            'content': form['content'].data
        }

        comment = Comment(**data)
        db.session.add(comment)
        db.session.commit()
        return jsonify(comment.to_dict())

    print('\n\n\nFAILED\n\n\n')
    return jsonify('Invalid Request'), 401


@comments_routes.route('/<int:commentId>/', methods=['PUT'])
def edit_comment(commentId):
    form = EditCommentForm()
    comment = request.get_json()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment_to_edit = Comment.query.get(commentId)

        print('\n\n\nnew comment', comment.get('userId'))

        print('\n\n\nexisting comment', comment_to_edit.userId)

        if int(comment.get('userId')) == int(comment_to_edit.userId):
            comment_to_edit.content = form['content'].data
            db.session.commit()

            return jsonify(comment_to_edit.to_dict())

    return jsonify('Invalid Request'), 401



@comments_routes.route('/<int:commentId>/', methods=['DELETE'])
def remove_comment(commentId):
    comment = Comment.query.get(commentId)
    sessionId = session['_user_id']

    if int(comment.userId) == int(sessionId):
        db.session.delete(comment)
        db.session.commit()
        return jsonify({ 'id': commentId })
    else:
        return jsonify('Invalid Request'), 401
