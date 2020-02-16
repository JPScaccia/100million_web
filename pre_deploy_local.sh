environment=${1}
project=${2}
echo "rsyncing .env_${environment}_${project}"
rsync .env_${environment}_${project} ec2-user@rmc2:/var/www/html/${project}_web_${environment}/current
echo "rsyncing done"
