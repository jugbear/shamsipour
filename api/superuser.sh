#!/usr/bin/expect -f

set timeout -1

spawn python manage.py createsuperuser

expect "Username (leave blank to use 'speedster'):"

send -- "ImAdam\r"

expect "Can I ask you some questions?\r"

send -- "Sure\r"

expect "What is your favorite topic?\r"

send -- "Technology\r"

expect eof