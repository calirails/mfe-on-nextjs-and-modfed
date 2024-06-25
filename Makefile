#install remote
install-mfe1:
	cd mfe1; pnpm i

#install host
install-mfe2:
	cd mfe2; pnpm i

#install all
install:
	make install-mfe1 install-mfe2

#start remote
dev-mfe2:
	(cd mfe2; pnpm run dev-lwp)

#start host
dev-mfe1:
	(cd mfe1; pnpm run dev-lwp)

#start all
dev:
	make -j 2 dev-mfe2 dev-mfe1