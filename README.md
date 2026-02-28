project-root/
│
├── docker/
│ ├── mysql/
│ │ └── my.cnf
│ ├── nest/
│ │ └── Dockerfile
│ └── next/
│ └── Dockerfile
│
├── backend/ # NestJS
│ ├── src/
│ │ ├── modules/
│ │ ├── app.module.ts
│ │ └── main.ts
│ ├── prisma/ # или typeorm config
│ ├── package.json
│ └── tsconfig.json
│
├── frontend/ # Next.js
│ ├── app/ or pages/
│ ├── components/
│ ├── public/
│ ├── styles/
│ └── package.json
│
├── .env
├── docker-compose.yml
└── README.md


  mysql:
    image: mysql:8.0
    container_name: mysql
    restart: always
    env_file: .env
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
      - ./docker/mysql/my.cnf:/etc/mysql/my.cnf
      

[mysqld]
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci
sql_mode = STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION
default-time-zone = '+00:00'
max_connections = 200

[client]
default-character-set = utf8mb4