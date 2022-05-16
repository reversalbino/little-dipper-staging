from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class CreateTagForm(FlaskForm):
    tag = StringField('Tag', validators=[DataRequired()])
