from .db import db

tagged_images = db.Table(
    'tagged_images',
    db.Column('postId', db.Integer, db.ForeignKey('posts.id')),
    db.Column('tagId', db.Integer, db.ForeignKey('tags.id'))
)
