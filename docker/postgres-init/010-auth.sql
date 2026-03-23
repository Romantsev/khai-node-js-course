CREATE ROLE nodejs_course_admin WITH LOGIN PASSWORD 'my_password';

GRANT ALL PRIVILEGES ON DATABASE nodejs_course_database TO nodejs_course_admin;
