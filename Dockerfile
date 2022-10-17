FROM node:lts-alpine

RUN apk add bash

USER node
ENV APP_ROOT=${HOME}/internal-documentation

WORKDIR ${APP_ROOT}

COPY . .
COPY ./entrypoint.sh /entrypoint.sh

USER root

RUN chgrp -R node ${APP_ROOT} && \
    chmod -R g=u ${APP_ROOT} /etc/passwd
RUN chmod -R u+x /entrypoint.sh && \
	chgrp -R node /entrypoint.sh && \
    chmod g=u /entrypoint.sh
RUN chown -R node:0 ${APP_ROOT} && \
    chmod -R g+rw ${APP_ROOT}

USER node

EXPOSE 8080

RUN cd ${APP_ROOT}
RUN yarn
RUN yarn build

ENTRYPOINT [ "/entrypoint.sh" ]