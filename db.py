def create_database():
    """Creates the database and students table if they don't already exist."""
    conn = sqlite3.connect("school.db")
    cursor = conn.cursor()
    cursor.execute(""" create table if not exists students (
        roll_no integer primary key,
        s_name text not null,
        subject1 real,
        subject2 real,
        subject3 real
    )
    """)
    conn.commit()
    conn.close()
    