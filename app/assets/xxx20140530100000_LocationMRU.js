migration.up = function(migrator) {
    migrator.db.execute('ALTER TABLE ' + migrator.table + ' ADD COLUMN JURIS TEXT;');
};
migration.down = function(migrator) {
};