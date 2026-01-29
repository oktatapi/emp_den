import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Employee) {
    await db.Employee.bulkCreate([
      { id: 1, name: 'Erős István', city: 'Szeged', salary: 395, positionId: 1 },
      { id: 2, name: 'Csondor Géza', city: 'Szolnok', salary: 395, positionId: 2 },
      { id: 3, name: 'Lapi Ferenc', city: 'Szeged', salary: 395, positionId: 3 },
      { id: 4, name: 'Hír Ödön', city: 'Hatvan', salary: 395, positionId: 2 },
      { id: 5, name: 'Rom Alex', city: 'Szeged', salary: 395, positionId: 1 },
    ]);
  }else {
    await QueryInterface.bulkInsert('employees', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('employees');
}

export { up, down }
