#Etape 1 - Image de base
FROM python:3.13-slim

#Etape 2 - reo de travauk : ou le code de l'application sera placé

WORKDIR /MediCare_back


#Installer les dépendance du sys (postgres etc...)
RUN apt-get update && apt-get install -y \
    build-essential libpq-dev && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

#Copier le code source

COPY . .

#Exposer le port Django

EXPOSE 8000

#Lancer le serveur Django
#A modifier en prod !
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

