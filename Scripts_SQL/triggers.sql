-- Historique dossier patient
DELIMITER $$

CREATE TRIGGER HistoriserDossierPatient
BEFORE UPDATE ON dossierpatient
FOR EACH ROW
BEGIN
    SET NEW.historique = JSON_ARRAY_APPEND(
        OLD.historique,
        '$',
        JSON_OBJECT(
            'ancien', OLD.informations_medicaux,
            'nouveau', NEW.informations_medicaux,
            'date', NOW()
        )
    );
END$$

DELIMITER ;


-- Calculer age du patient
CREATE TRIGGER CalculerAgePatient
AFTER UPDATE ON Patients
FOR EACH ROW
BEGIN
    UPDATE Patients
    SET age = TIMESTAMPDIFF(YEAR, date_naissance, CURDATE())
    WHERE patient_id = NEW.patient_id;
END;
