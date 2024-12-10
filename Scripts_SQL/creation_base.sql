-- Création de la table Patients
CREATE TABLE Patients (
    patient_id VARCHAR(50) PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    date_naissance DATE NOT NULL,
    num_secu VARCHAR(50) UNIQUE,
    email VARCHAR(150),
    telephone VARCHAR(15),
    adresse TEXT
);

-- Création de la table DossierPatient
CREATE TABLE DossierPatient (
    dossier_id VARCHAR(50) PRIMARY KEY,
    patient_id VARCHAR(50) NOT NULL,
    date_creation DATE NOT NULL,
    informations_medicaux TEXT,
    historique_interventions TEXT,
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id)
);

-- Création de la table RendezVous
CREATE TABLE RendezVous (
    rdv_id VARCHAR(50) PRIMARY KEY,
    date_rdv DATE NOT NULL,
    heure_rdv TIME NOT NULL,
    type_intervention VARCHAR(100),
    specialiste_id VARCHAR(50),
    patient_id VARCHAR(50),
    FOREIGN KEY (specialiste_id) REFERENCES Specialiste(specialiste_id),
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id)
);

-- Création de la table Specialiste
CREATE TABLE Specialiste (
    specialiste_id VARCHAR(50) PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    specialite VARCHAR(100),
    clinique_id VARCHAR(50),
    FOREIGN KEY (clinique_id) REFERENCES Clinique(clinique_id)
);

-- Création de la table Prescriptions
CREATE TABLE Prescriptions (
    prescription_id VARCHAR(50) PRIMARY KEY,
    medicament VARCHAR(100),
    dosage VARCHAR(50),
    frequence VARCHAR(50),
    dossier_id VARCHAR(50),
    FOREIGN KEY (dossier_id) REFERENCES DossierPatient(dossier_id)
);

-- Création de la table Clinique
CREATE TABLE Clinique (
    clinique_id VARCHAR(50) PRIMARY KEY,
    nom VARCHAR(100),
    adresse TEXT,
    num_tel VARCHAR(15)
);

