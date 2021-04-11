import os
from flask import Flask,render_template, request,json,jsonify

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
import MySQLdb

engine = create_engine('mysql+mysqldb://root:jugal@localhost/BleachLap')
db = scoped_session(sessionmaker(bind=engine))
app = Flask(__name__)


app.secret_key = 'super secret key'
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"


@app.route('/')
def login():
    return render_template('login.html')



@app.route('/',methods=['POST'])
def loginUser():
    
    username =  db.execute("SELECT email,password FROM signUp").fetchall()
    emailArray1 = []
    passwordArray1 = []
    
    for row in username:
        emailArray1.append( row.email)
        passwordArray1.append(row.password)
        
    emailArray = emailArray1;
    passwordArray = passwordArray1;
    #emailArray = json.dumps(emailArray1)
    #passwordArray = json.dumps(passwordArray1)
    print(emailArray1)
    print(passwordArray1)
    res ={}
    res = json.dumps({'status':'OK','email':emailArray,'password':passwordArray})
    return res
    

@app.route('/signUp')
def signUp():
    return render_template('signUp.html')

@app.route('/signUpUser', methods=['POST'])
def signUpUser():
    name =  request.form['name']
    username =  request.form['username']
    country =  request.form['country']
    city =  request.form['city']
    school =  request.form['school']
    password = request.form['password']
    passwordconf =  request.form['passwordconf']


    db.execute("INSERT INTO signUp (name,email,country,city,school,password,passwordconf) VALUES(:name, :email,:country,:city,:school,:password,:passwordconf)",{"name":name,"email":username,"country":country,"city":city,"school":school,"password":password,"passwordconf":passwordconf})

    db.commit()


    return json.dumps({'status':'OK','name':name,'username':username,'country':country,'city':city,'school':school,'password':password,'passwordconf':passwordconf})


@app.route("/home", methods=['POST'])
def home():
    password =  request.form['password']
    username =  request.form['username']
    return json.dumps({'status':'OK','username':username,'password':password})




#Gx portion start

@app.route("/Gxmove")
def Gxmove():
    return render_template("gx_move.html")

@app.route("/Gxmove/homePage")
def homePage():
    return render_template("home.html")


@app.route("/Gxmove/jerk")
def twoJerk():
    return render_template("/Jerk_templates/jerk.html")

@app.route("/Gxmove/RNA")
def RNA():
    return render_template("/Rna_templates/RNA.html")

#gx portion close

#2jerk portion
@app.route("/Gxmove/jerk/header")
def jerkHeader():
    return render_template("/Jerk_templates/header.html")

@app.route("/Gxmove/jerk/heroArea")
def jerkHeroArea():
    return render_template("/Jerk_templates/heroArea.html")

@app.route("/Gxmove/jerk/trendingPostArea")
def jerkTrendingPostArea():
    return render_template("/Jerk_templates/trendingPostArea.html")

@app.route("/Gxmove/jerk/view_post")
def jerkView_post():
    return render_template("/Jerk_templates/view_post.html")

@app.route("/Gxmove/jerk/footer")
def jerkFooter():
    return render_template("/Jerk_templates/footer.html")

@app.route("/Gxmove/temp_sup/video-post.html")
def jerkVideoPost_post():
    return render_template("/Jerk_templates/temp_sup/video-post.html")


#2Jerk portion close




@app.route("/passwordReset")
def passwordReset():
    return render_template("passwordReset.html")

@app.route("/passwordReset", methods=['POST'])
def loadpasswordReset():
    username =  db.execute("SELECT email,password FROM signUp").fetchall()
    emailArray1 = []
    passwordArray1 = []
    
    for row in username:
        emailArray1.append( row.email)
        passwordArray1.append(row.password)
        
    
    print(emailArray1)
    print(passwordArray1)
    res1 ={}
    res1 = json.dumps({'status':'OK','email':emailArray1,'password':passwordArray1})
    return res1








@app.route('/forgotpassword')
def forgotpassword():
    return render_template('forgotpassword.html')


@app.route('/forgotpassword',methods=['POST'])
def loadforgotPassword():
    
    username =  db.execute("SELECT email,password FROM signUp").fetchall()
    emailArray1 = []
    passwordArray1 = []
    
    for row in username:
        emailArray1.append( row.email)
        passwordArray1.append(row.password)
        
    emailArray = emailArray1;
    passwordArray = passwordArray1;
    #emailArray = json.dumps(emailArray1)
    #passwordArray = json.dumps(passwordArray1)
    print(emailArray1)
    print(passwordArray1)
    res ={}
    res = json.dumps({'status':'OK','email':emailArray,'password':passwordArray})
    return res
    


@app.route("/tablecreation")
def tablecreation():
    return render_template("tablecreation.html")


@app.route('/modalformtodb', methods=['POST'])
def insertToTable():
    id1 =  request.form['number']
    monday =  request.form['monday']
    tuesday =  request.form['tuesday']
    wednesday =  request.form['wednesday']
    thursday =  request.form['thursday']
    friday =  request.form['friday']
    

    db.execute("INSERT INTO schooltimetable (id,monday,tuesday,wednesday,thursday,friday) VALUES(:id ,:monday, :tuesday,:wednesday,:thursday,:friday)",{"id":id1,"monday":monday,"tuesday":tuesday,"wednesday":wednesday,"thursday":thursday,"friday":friday})

    db.commit()
    res = json.dumps({'status':'OK','id':id1,'monday':monday,'tuesday':tuesday,'wednesday':wednesday,'thursday':thursday,'friday':friday})

    return res



@app.route('/tablecreation',methods=['POST'])
def dbtomodal():
    
    schooltimetable =  db.execute("SELECT id,monday,tuesday,wednesday,thursday,friday FROM schooltimetable").fetchall()

    idArray1 = []
    mondayArray1 = []
    tuesdayArray1 = []
    wednesdayArray1 = []
    thursdayArray1 = []
    fridayArray1 = []
    
    for row in schooltimetable:
        idArray1.append( row.id)
        mondayArray1.append(row.monday)
        tuesdayArray1.append( row.tuesday)
        wednesdayArray1.append(row.wednesday)
        thursdayArray1.append( row.thursday)
        fridayArray1.append(row.friday)
  
  
    res ={}
    res = json.dumps({'status':'OK','id':idArray1,'monday':mondayArray1,'tuesday':tuesdayArray1,'wednesday':wednesdayArray1,'thursday':thursdayArray1,'friday':fridayArray1})

    return res
    


@app.route('/updateformtodb', methods=['POST'])
def updateFormtodb():
    id2 =  request.form['number']
    monday1 =  request.form['monday']
    tuesday1 =  request.form['tuesday']
    wednesday1 =  request.form['wednesday']
    thursday1 =  request.form['thursday']
    friday1 =  request.form['friday']
    print(id2)
    
    db.execute("UPDATE schooltimetable SET id = :id,monday = :monday,tuesday = :tuesday, wednesday = :wednesday,thursday = :thursday,friday = :friday where id = :id ",{"id":id2,"monday":monday1,"tuesday":tuesday1,"wednesday":wednesday1,"thursday":thursday1,"friday":friday1}) 

    db.commit()
    
    res = json.dumps({'status':'OK'})

    return res

@app.route('/deletetodb', methods=['POST'])
def deletetodb():
    id3 =  request.form['rowdelete']
    
    db.execute("DELETE FROM schooltimetable where id = :id ",{"id":id3}) 

    db.commit()
    
    res = json.dumps({'status':'OK'})

    return res















if __name__=="__main__":
    app.run()
