module.exports = {
  apps: [{
    name: "100million_web",
    cwd: "/var/www/html/100million_web_staging/current/build/",
  }],

  deploy: {
    staging: {
      user: 'ec2-user',
      host: '3.91.186.33',
      key: '~/.ssh/RMC2.pem',
      ref: 'origin/master',
      repo: 'git@bitbucket.org:resrvoir/100million_web.git',
      path: '/var/www/html/100million_web_staging/',
      'pre-deploy-local': 'bash pre_deploy_local-staging.sh',
      'post-deploy': 'bash post_deploy-staging.sh'
    },
  }
};
