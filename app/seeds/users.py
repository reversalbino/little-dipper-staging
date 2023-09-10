from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(username='Demo', email='demo@aa.io', password='password', profileImageUrl=None)

    marnie = User(username='marnie', email='marnie@aa.io', password='password', profileImageUrl=None)

    bobbie = User(username='bobbie', email='bobbie@aa.io', password='password', profileImageUrl=None)

    fraidhoneycomb = User(username='fraidhoneycomb', email='fraidhoneycomb@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_0.jpeg')

    crystalflapjack = User(username='crystalflapjack', email='crystalflapjack@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_1.jpeg')

    shopcurly = User(username='shopcurly', email='shopcurly@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_2.jpeg')

    emailpinafore = User(username='emailpinafore', email='emailpinafore@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_3.jpeg')

    beginnerlimit = User(username='beginnerlimit', email='beginnerlimit@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_4.jpeg')

    shrillmagician = User(username='shrillmagician', email='shrillmagician@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_5.jpeg')

    limbrepulsive = User(username='limbrepulsive', email='limbrepulsive@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_6.jpeg')

    tameboot = User(username='tameboot', email='tameboot@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_7.jpeg')

    slowlygroup = User(username='slowlygroup', email='slowlygroup@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_8.jpeg')

    squealingzap = User(username='squealingzap', email='squealingzap@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_9.jpeg')

    judgmentwandering = User(username='judgmentwandering', email='judgmentwandering@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_10.jpeg')

    duringmain = User(username='duringmain', email='duringmain@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_11.jpeg')

    glibpussface = User(username='glibpussface', email='glibpussface@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_12.jpeg')

    draftykelp = User(username='draftykelp', email='draftykelp@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_13.jpeg')

    recognizelifter = User(username='recognizelifter', email='recognizelifter@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_14.jpeg')

    travelterror = User(username='travelterror', email='travelterror@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_15.jpeg')

    butterflysubtlety = User(username='butterflysubtlety', email='butterflysubtlety@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_16.jpeg')

    marmaladetrusting = User(username='marmaladetrusting', email='marmaladetrusting@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_17.jpeg')

    silentcompete = User(username='silentcompete', email='silentcompete@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_18.jpeg')

    theorytrail = User(username='theorytrail', email='theorytrail@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_19.jpeg')

    torsodesign = User(username='torsodesign', email='torsodesign@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_20.jpeg')

    stormynautilus = User(username='stormynautilus', email='stormynautilus@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_21.jpeg')

    pinkieharrow = User(username='pinkieharrow', email='pinkieharrow@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_22.jpeg')

    arrowmeek = User(username='arrowmeek', email='arrowmeek@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_23.jpeg')

    staysailstinker = User(username='staysailstinker', email='staysailstinker@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_24.jpeg')

    outhaulgun = User(username='outhaulgun', email='outhaulgun@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_25.jpeg')

    bountifulpouch = User(username='bountifulpouch', email='bountifulpouch@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_26.jpeg')

    rusheverywhere = User(username='rusheverywhere', email='rusheverywhere@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_27.jpeg')

    softpumps = User(username='softpumps', email='softpumps@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_28.jpeg')

    kindconcede = User(username='kindconcede', email='kindconcede@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_29.jpeg')

    turkeyfibber = User(username='turkeyfibber', email='turkeyfibber@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_30.jpeg')

    railshosiery = User(username='railshosiery', email='railshosiery@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_31.jpeg')

    accesscrafting = User(username='accesscrafting', email='accesscrafting@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_32.jpeg')

    nissanforecastle = User(username='nissanforecastle', email='nissanforecastle@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_33.jpeg')

    existingdeceive = User(username='existingdeceive', email='existingdeceive@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_34.jpeg')

    surprisinggrowth = User(username='surprisinggrowth', email='surprisinggrowth@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_35.jpeg')

    improbableuncommon = User(username='improbableuncommon', email='improbableuncommon@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_36.jpeg')

    jackstaycollect = User(username='jackstaycollect', email='jackstaycollect@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_37.jpeg')

    publicvia = User(username='publicvia', email='publicvia@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_38.jpeg')

    documentphrase = User(username='documentphrase', email='documentphrase@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_39.jpeg')

    homelycustomer = User(username='homelycustomer', email='homelycustomer@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_40.jpeg')

    actuallyoutfit = User(username='actuallyoutfit', email='actuallyoutfit@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_41.jpeg')

    silenceoak = User(username='silenceoak', email='silenceoak@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_42.jpeg')

    scentedgaping = User(username='scentedgaping', email='scentedgaping@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_43.jpeg')

    scarewipe = User(username='scarewipe', email='scarewipe@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_44.jpeg')

    seaforester = User(username='seaforester', email='seaforester@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_45.jpeg')

    officercontrast = User(username='officercontrast', email='officercontrast@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_46.jpeg')

    divercome = User(username='divercome', email='divercome@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_47.jpeg')

    digresshat = User(username='digresshat', email='digresshat@aa.io', password='password', profileImageUrl='https://little-dipper.s3.us-west-2.amazonaws.com/user_48.jpeg')

    carrierlion = User(username='carrierlion', email='carrierlion@aa.io', password='password', profileImageUrl=None)


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(fraidhoneycomb)
    db.session.add(crystalflapjack)
    db.session.add(shopcurly)
    db.session.add(emailpinafore)
    db.session.add(beginnerlimit)
    db.session.add(shrillmagician)
    db.session.add(limbrepulsive)
    db.session.add(tameboot)
    db.session.add(slowlygroup)
    db.session.add(squealingzap)
    db.session.add(judgmentwandering)
    db.session.add(duringmain)
    db.session.add(glibpussface)
    db.session.add(draftykelp)
    db.session.add(recognizelifter)
    db.session.add(travelterror)
    db.session.add(butterflysubtlety)
    db.session.add(marmaladetrusting)
    db.session.add(silentcompete)
    db.session.add(theorytrail)
    db.session.add(torsodesign)
    db.session.add(stormynautilus)
    db.session.add(pinkieharrow)
    db.session.add(arrowmeek)
    db.session.add(staysailstinker)
    db.session.add(outhaulgun)
    db.session.add(bountifulpouch)
    db.session.add(rusheverywhere)
    db.session.add(softpumps)
    db.session.add(kindconcede)
    db.session.add(turkeyfibber)
    db.session.add(railshosiery)
    db.session.add(accesscrafting)
    db.session.add(nissanforecastle)
    db.session.add(existingdeceive)
    db.session.add(surprisinggrowth)
    db.session.add(improbableuncommon)
    db.session.add(jackstaycollect)
    db.session.add(publicvia)
    db.session.add(documentphrase)
    db.session.add(homelycustomer)
    db.session.add(actuallyoutfit)
    db.session.add(silenceoak)
    db.session.add(scentedgaping)
    db.session.add(scarewipe)
    db.session.add(seaforester)
    db.session.add(officercontrast)
    db.session.add(divercome)
    db.session.add(digresshat)
    db.session.add(carrierlion)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
