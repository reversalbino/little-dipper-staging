from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class CreatePostForm(FlaskForm):
    postImageUrl = StringField('ImageURL', validators=[DataRequired()])
    title = StringField('Title')


class EditPostForm(FlaskForm):
    title = StringField('Title')
