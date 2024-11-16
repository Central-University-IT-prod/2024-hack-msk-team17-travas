from sqlalchemy import create_engine, Column, Integer, String # type: ignore
from sqlalchemy.ext.declarative import declarative_base # type: ignore
from sqlalchemy.orm import sessionmaker # type: ignore
from models import User

Base = declarative_base()
engine = create_engine('sqlite:///password_db.db')

Base.metadata.create_all(engine)

def login_func(username, password): 
    Session = sessionmaker(bind=engine) 
    session = Session() 

    existing_user = session.query(User).filter_by(username=username).first() 
    if existing_user:
        print(f"User found: {existing_user.username}")
        if existing_user.password == password: 
            print("Password match")
            return True, existing_user.id 
        else:
            print("Password does not match")
    else:
        print("User not found")
    
    return False, None
