import Store from 'react-native-store';

const DB = {
    'taches': Store.model('taches'),
};

export async function getTaches() {
    const ret = await DB.taches.find();
    if(ret==null) {
        return [];
    }
    return ret;
}

export async function getTache(titre) {
    const ret = await DB.taches.find({
        where: 
            {titre: titre},
    });
    if(ret==null) {
        return [];
    }
    return ret[0];
}

export async function findTache(query) {
    if(query==null || query==="") {
        return [];
    }
    var key = query.toLowerCase();
    var pattern = new RegExp('.*'+key+'.*', "i"); /* case-insensitive RegExp search */
    const taches = await getTaches();
    var titres = [];
    for (const tache of taches) {
        const mName = tache.titre.toLowerCase();
        if(mName.includes(key)) {
            titres.push({titre: tache.titre});
        }
    }
    const ret = await DB.taches.find({
        where: {
            or: names
        }
    });
    if(ret==null) {
        return [];
    }
    return ret;
}

export async function storeTache(newTaches) {

    await DB.taches.add(newTaches);
    // const ret = await DB.taches.update(newTaches, {
    //     where: {
    //         and: [{ id: newTaches.id },]
    //     }
    // });
    // if(ret==null) {
    //     await DB.taches.add(newTaches);
    // }
}
