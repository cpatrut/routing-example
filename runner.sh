#!/bin/bash

function remove_all(){
  echo "#STOPING CONTAINERS"
  docker stop $(docker ps -a -q)
  echo "#REMOVING CONTAINER"
  docker rm $(docker ps -a -q)
  echo "#REMOVING IMAGES"
  docker rmi $(docker images -a -q)
}



function help_menu () {
cat << EOF
Usage: ${0} (-c | -r | )

ENVIRONMENT VARIABLES:


OPTIONS:
   -h|--help                 Show this message
   -c|--clean                removing all container
   -r|--sudo                 running everything



EOF
}
while [[ $# > 0 ]]
do
case "${1}" in
  -c|--clean)
  remove_all
  shift
  ;;
  -h|--help)
  help_menu
  shift
  ;;
  *)
  echo "${1} is not a valid flag, try running: ${0} --help"
  ;;
esac
shift
done
