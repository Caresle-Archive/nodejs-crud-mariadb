-- Uncomment this line if you run this:
-- `mysql -u username --password="" < database/data.sql` 
--USE contacts_app;

INSERT INTO users (username, password) VALUES (
	"MyUser1",
	"MyPassword"
);

INSERT INTO users (username, password) VALUES (
	"MyUser2",
	"MyPassword2"
);

INSERT INTO contacts (contact_name, phone_number) VALUES (
	"Contact1",
	"1111111111"
);

INSERT INTO contacts (contact_name, phone_number) VALUES (
	"Contact2",
	"2222222222"
);