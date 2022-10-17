#!/bin/bash


# SITTERM / SIGINT
responsible_shutdown() {
  echo ""
  echo "Received SIGTERM"
  kill -SIGINT ${PID}
  wait ${PID}
  exit;
}

set -e
set +o posix

# setup handlers
# on callback, kill the last background process, which is `tail -f /dev/null` and execute the specified handler
trap 'responsible_shutdown' SIGHUP SIGTERM SIGINT

echo "ali test"

cd ${APP_ROOT}

echo $(ls)

yarn serve &

PID=$!

# See: http://veithen.github.io/2014/11/16/sigterm-propagation.html
wait ${PID}
wait ${PID}
EXIT_STATUS=$?

# wait forever
while true
do
  tail -f /dev/null & wait ${!}
done
