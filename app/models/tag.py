from .db import db
from .tagged_images import tagged_images
from sqlalchemy.sql import func

class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    tag = db.Column(db.String(50), nullable=False)
    createdAt = db.Column(db.DateTime(timezone=True), server_default=func.now(), nullable=False)
    updatedAt = db.Column(db.DateTime(timezone=True), server_onupdate=func.now(), server_default=func.now())

    posts = db.relationship('Post', secondary=tagged_images, back_populates='tags')

    def to_dict(self):
        return {
            'id': self.id,
            'tag': self.tag,
            # 'posts': [post.to_dict_lite() for post in self.posts],
            'posts': [],
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }

    def to_dict_lite(self):
        return {
            'id': self.id,
            'tag': self.tag,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }
