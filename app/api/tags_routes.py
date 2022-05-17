from flask import Blueprint, request, jsonify, session
from app.forms import CreateTagForm, CreateCommentForm
from app.models import db, Post, Tag
from app.api.utils import validation_errors_to_error_messages

tags_routes = Blueprint('tags', __name__)

# ADD TAGS TO IMAGE
@tags_routes.route('/<int:postId>/', methods=['POST'])
def add_tag(postId):
    form = CreateTagForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        value = form['tag'].data
        tag = Tag.query.filter(Tag.tag == value).first()
        image = Post.query.get(postId)

        print('\n\n', tag.to_dict_lite(), '\n\n')

        if tag:
            print('\n\nFOUND TAG\n\n')
            for post in tag.posts:
                if int(post.id) == int(postId):
                    print('\n\nALREADY EXISTS\n\n')
                    return jsonify('Image already has that tag'), 401

            tag.posts.append(image)
            db.session.commit()

            return jsonify(tag.to_dict_lite())
        else:
            print('\n\CREATING TAG\n\n')
            value = {'tag': form['tag'].data}
            new_tag = Tag(**value)
            db.session.add(new_tag)
            db.session.commit()

            new_tag.posts.append(image)
            db.session.commit()

            return jsonify(new_tag.to_dict_lite())
    else:
        return jsonify('Failed'), 401


@tags_routes.route('/<int:postId>/<int:tagId>/', methods=['DELETE'])
def delete_tag(postId, tagId):
    tag = Tag.query.get(tagId)
    post = Post.query.get(postId)

    print('\n\n\n', post.to_dict_lite()['userId'], '\n\n\n')
    print('\n\n\n', session['_user_id'], '\n\n\n')

    if tag and (post.to_dict_lite()['userId'] == int(session['_user_id'])):
        if len(tag.posts) == 1:
            tag.posts.remove(post)
            db.session.delete(tag)
            db.session.commit()
            return jsonify(tag.to_dict_lite())
        elif len(tag.posts) > 1:
            tag.posts.remove(post)
            return jsonify(tag.to_dict_lite())
        else:
            return jsonify('Error: image doesn\'t seem to have that tag...'), 401
