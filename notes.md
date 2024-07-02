## Sempre que precisar limpar os artefatos dos containers
./docker-clean.sh

## Copia o .env
```shell
cp .env_example .env
```

## Subir App Docker
```shell
docker-compose up -d
```

## Recompilar as imagens e Subir App Docker (Optional)
```shell
docker-compose up --build
```

## Apagar Banco de Dados (Optional)
```shell
docker-compose exec app rails db:drop
```

## Criar Banco de Dados
```shell
docker-compose exec app rails db:create
```

## Fazer Migracao
```shell
docker-compose exec app rails db:migrate
```

## Criando os seeds
```shell
docker-compose run app rails db:seed
```

## Permitir ler, alterar e executar em postgres
```shell
sudo chmod -R 777 postgres
```

## Permitir ler, alterar e executar em app
```shell
sudo chmod -R 777 app
```

## Rails console
```shell
docker-compose exec app pry 
```

## desinstalar todas as gems
```shell
for i in `gem list --no-versions`; do gem uninstall -aIx $i; done
```
```shell
docker-compose exec app rails credentials:edit RAILS_ENV=development
```
##
