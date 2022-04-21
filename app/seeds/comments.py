from app.models import db, Comment


def seed_comments():
    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
