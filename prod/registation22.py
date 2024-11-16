from sqlalchemy.orm import sessionmaker # type: ignore
from models import User, engine
from sqlalchemy.orm import sessionmaker # type: ignore
from models import User, engine 


def register_user(username, password, email):
    Session = sessionmaker(bind=engine)
    session = Session()

    try:
        existing_user = session.query(User).filter_by(username=username).first()
        existing_email = session.query(User).filter_by(email=email).first()

        if existing_user or existing_email:
            print("User or email already exists")
            return {"status": "error", "message": "Пользователь с таким именем или почтой уже существует"}

        if username and password and email:
            new_user = User(
                username=username,
                password=password,
                email=email  
            )
            session.add(new_user)
            session.commit()
            return {"status": "success", "message": "Пользователь успешно зарегистрирован"}
        else:
            print("Invalid input data")
            return {"status": "error", "message": "Неверный ввод данных"}
    except Exception as e:
        session.rollback()
        print(f"Exception occurred: {e}")
        return {"status": "error", "message": str(e)}
    finally:
        session.close()