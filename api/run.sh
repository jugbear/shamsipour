docker-compose up -d
sleep 5
python manage.py makemigrations main
python manage.py migrate
python manage.py loaddata data.json
python manage.py runserver 0.0.0.0:8000