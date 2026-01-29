import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Position) {
    await db.Position.bulkCreate([
      { id: 1, name: 'fejlesztő' },
      { id: 2, name: 'tesztelő' },
      { id: 3, name: 'takarító' },
    ]);
  }else {
    await QueryInterface.bulkInsert('positions', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('positions');
}

export { up, down }
