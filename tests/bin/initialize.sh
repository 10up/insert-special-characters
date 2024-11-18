#!/bin/bash
wp-env run tests-wordpress chmod -c ugo+w /var/www/html
wp-env run tests-cli wp rewrite structure '/%postname%/' --hard
wp-env run tests-cli wp post create --post_type=page --post_title='Page with special characters' --post_status='publish'
