# Ecommerce Angular

## Tools
- Angular 16
- Docker 24.0.0.2
- Node 18.15

---

## Docker Container

### Build Image

`docker build -t ecommorce-angular .`

### Run Container


Go into the Docker Container

`docker run --rm -it --entrypoint /bin/sh ecommorce-angular`


docker run -d -p 80:80 ecommorce-angular