-- Patient

DELIMITER $$
CREATE PROCEDURE AjouterPatient (
    IN p_nom VARCHAR(100),
    IN p_prenom VARCHAR(100),
    IN p_date_naissance DATE,
    IN p_num_secu VARCHAR(50),
    IN p_email VARCHAR(150),
    IN p_telephone VARCHAR(15),
    IN p_adresse TEXT
)
BEGIN
    INSERT INTO Patients (nom, prenom, date_naissance, num_secu, email, telephone, adresse)
    VALUES (p_nom, p_prenom, p_date_naissance, p_num_secu, p_email, p_telephone, p_adresse);
END$$
DELIMITER ;

--  planifier un rendez-vous 

DELIMITER $$
CREATE PROCEDURE PlanifierRendezVous (
    IN p_patient_id VARCHAR(50),
    IN p_specialiste_id VARCHAR(50),
    IN p_date DATE,
    IN p_heure TIME,
    IN p_type_intervention VARCHAR(100)
)
BEGIN
    INSERT INTO RendezVous (patient_id, specialiste_id, date_rdv, heure_rdv, type_intervention)
    VALUES (p_patient_id, p_specialiste_id, p_date, p_heure, p_type_intervention);
END$$
DELIMITER ;
