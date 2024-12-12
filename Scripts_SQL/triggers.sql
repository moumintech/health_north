-- Historique dossier patient
CREATE TRIGGER HistoriserDossierPatient
AFTER UPDATE ON DossierPatient
FOR EACH ROW
BEGIN
    INSERT INTO HistoriqueDossier (dossier_id, ancien_medical, nouveau_medical, date_modification)
    VALUES (OLD.dossier_id, OLD.informations_medicaux, NEW.informations_medicaux, NOW());
END;

-- Calculer age du patient
CREATE TRIGGER CalculerAgePatient
AFTER UPDATE ON Patients
FOR EACH ROW
BEGIN
    UPDATE Patients
    SET age = TIMESTAMPDIFF(YEAR, date_naissance, CURDATE())
    WHERE patient_id = NEW.patient_id;
END;
