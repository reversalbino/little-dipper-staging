from flask import Blueprint, request, jsonify
from app.forms import CreateTagForm, CreateCommentForm
from app.models import db, Post, Tag
from app.api.utils import validation_errors_to_error_messages

tags_routes = Blueprint('tags', __name__)

# ADD TAGS TO IMAGE
@tags_routes.route('/<int:postId>/', methods=['POST'])
def add_tag(postId):
    print('\n\n\nBEFORE\n\n\n')
    form = CreateTagForm()
    print('\n\n\nAFTER\n\n\n')

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        value = form['tag'].data
        tag = Tag.query.filter(str(Tag.tag).lower() == value.lower()).first()
        image = Post.query.get(postId)

        if tag:
            for post in tag.posts:
                if int(post.id) == int(postId):
                    return jsonify('Image already has that tag'), 401

            tag.posts.append(image)
            return jsonify(tag.to_dict_lite())
        else:
            value = {'tag': form['tag'].data}
            new_tag = Tag(**value)
            db.session.add(new_tag)
            db.session.commit()

            new_tag.posts.append(image)
            db.session.commit()

            return jsonify(new_tag.to_dict_lite())
    else:
        return jsonify('Failed'), 401
