from flask import Blueprint, render_template, session, redirect, url_for, request, jsonify
from app.forms import CreatePostForm, EditPostForm
from app.models import db, Post
from app.api.utils import validation_errors_to_error_messages
from sqlalchemy import desc, or_

images_routes = Blueprint('images', __name__)

# GET ALL IMAGES
@images_routes.route('/')
def get_images():
    posts = Post.query.all()
    print('\n\n', posts, '\n\n')

    posts = [post.to_dict() for post in posts]

    return jsonify(posts)


# GET SINGLE IMAGE
@images_routes.route('/<int:postId>/')
def get_single_image(postId):
    post = Post.query.get(postId).to_dict()

    if post:
        return jsonify(post)
    else:
        return jsonify('Not found'), 401


# UPLOAD IMAGE
@images_routes.route('/', methods=["POST"])
def create_image():
    form = CreatePostForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = {
            "userId": session['_user_id'],
            "postImageUrl": form.data["postImageUrl"],
            "title": form.data["title"]
        }

        post = Post(**data)
        db.session.add(post)
        db.session.commit()
        return jsonify(post.to_dict())
    print(form.errors)

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@images_routes.route('/<int:postId>/', methods=['DELETE'])
def delete_image(postId):
    image = Post.query.get(postId)
    sessionUserId = session['_user_id']

    if image.to_dict()['userId'] == int(sessionUserId):
        db.session.delete(image)
        db.session.commit()
        return jsonify(postId)
    else:
        return jsonify('Invalid Request'), 401
