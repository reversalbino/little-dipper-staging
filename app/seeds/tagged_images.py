from app.models import db, Tag, Post

def seed_tagged_images():
    db.session.commit()


def undo_tagged_images():
    db.session.execute('TRUNCATE tagged_images RESTART IDENTITY CASCADE')
    db.session.commit()
