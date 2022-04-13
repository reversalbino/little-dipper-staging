from flask import Blueprint, render_template, session, redirect, url_for, request, jsonify
from app.forms import CreatePostForm, EditPostForm
from app.models import db, Post, User
from app.api.utils import validation_errors_to_error_messages
from sqlalchemy import desc, or_

posts_routes = Blueprint('posts', __name__)

@posts_routes.route('/', methods=["POST"])
def create_post():
    form = CreatePostForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = {
            "userId": session['_user_id'],
            "postImageUrl": form.data["postImageUrl"],
            "title": form.data["title"],
            "caption": form.data["caption"]
        }

        post = Post(**data)
        db.session.add(post)
        db.session.commit()
        return jsonify(post.to_dict())
    print(form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
