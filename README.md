# TaskRoom (backend)
## taskroom frontend => [https://github.com/aj941ga/TaskRoom-frontend](https://github.com/aj941ga/TaskRoom-frontend)

● A project management portal for agile teams.
● Supports kanban board, collaborations, discussions, timelines and project file uploads.
● Supports mailing functionalities for handling invitations, notifications, bounces and complaints.

## Technologies used
 HTML, CSS, JavaScript, Material-UI, MERN(MongoDB, ExpressJs, ReactJs, NodeJs), AWS(EBS, S3, SES, SNS)

## High level Architecture
![aws-architecture](https://github.com/aj941ga/TaskRoom-frontend/blob/main/public/taskroom-aws-architecture.png)

## Application Demo
Note: Simple Email Service is currently in sandbox mode so mailing features are restricted to only console verified email-addresses.
[TaskRoom](https://www.taskroom.cloud/)
 ________________________________________________________________________________________________________
## Running locally

Be sure to set the environment variables present in [/config](https://github.com/aj941ga/taskroom-api/tree/master/config).
To clone and install the application

```shell
 git clone https://github.com/aj941ga/taskroom-api.git
 cd taskroom-api
 npm install
 npm start
```
__________________________________________________________________________________________________________
## Deploying on AWS

`Elastic Beanstalk (EB) is a service used to deploy, manage, and scale web applications and services.`

### Setup
install the ELastic Beanstalk CLI, following [set-up-command-line-elastic-beanstalk](https://aws.amazon.com/getting-started/hands-on/set-up-command-line-elastic-beanstalk/)

To initialize elastic beanstalk application inside the root directory
```shell
eb init
```
Enter Region, Access key ID and Secret access key when prompted.
select platform as NodeJs.

### To deploy application to EBS
```shell
eb create
```
select default options.
creates setup of application necessary to run the application

To open the application in browser
```shell
eb open
```
________________________________________________________________________________________


