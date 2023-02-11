import React from 'react'
import { MeiliSearch } from 'meilisearch'

export default function SeiteErstellen() {

    const client = new MeiliSearch({ host: 'http://localhost:7700' })
    client.index('movies').addDocuments(movies)
    .then((res) => console.log(res));

    return (
        <div>SeiteErstellen</div>
    )
}
