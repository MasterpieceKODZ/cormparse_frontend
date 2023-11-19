# DOCKER COMMANDS

IMG_NAME:=cormparse_frontend
REPO_NAME:=masterpiecekodz/cormparse_frontend
REPO_n_TAG:=masterpiecekodz/cormparse_frontend:1.0.0

.PHONY: check_conts
check_conts:
	sudo docker container ps -a

.PHONY: rmv_all_cont
rmv_all_cont:
	sudo docker container rm ${IMG_NAME} --force

.PHONY: rmv_all_imgs
rmv_all_imgs:
	sudo docker image rm ${REPO_n_TAG} ${IMG_NAME} --force

.PHONY: build_img
build_img:
	npm run build
	
	sudo docker build  --cpu-quota 28000  -t ${IMG_NAME} .

.PHONY: tag_img
tag_img:
	sudo docker tag ${IMG_NAME} ${REPO_n_TAG}
	sudo docker tag ${IMG_NAME} ${REPO_NAME}

.PHONY: run_in_dev_mode
run_in_dev_mode: 
	NODE_ENV=development npm run dev

.PHONY: run_in_cont
run_in_cont:

	$(MAKE) build_img

	sudo docker run --name ${IMG_NAME} -e NODE_ENV=test -p 3000:3000 --net frontend_db_api ${IMG_NAME}

.PHONY: push_img
push_img:
	sudo docker push ${REPO_NAME}
	sudo docker push ${REPO_n_TAG}

.PHONY: deploy_to_cont_registry
deploy_to_cont_registry:

	$(MAKE) rmv_all_cont

	$(MAKE) rmv_all_imgs

	$(MAKE) build_img

	$(MAKE) tag_img

	$(MAKE) push_img

.PHONY: cypress_open
cypress_open:
	npx cypress open --project $PWD/cypress -b chrome --e2e

.PHONY: cypress_run
cypress_run:
	npx cypress run --project $PWD/cypress -b chrome --e2e
