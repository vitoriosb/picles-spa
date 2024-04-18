import { useEffect, useState } from 'react'
import { Header } from '../../components/common/Header'
import { Grid } from '../../components/layout/Grid'
import styles from './Pets.module.css'
import { Card } from '../../components/common/Card'
import { getPets } from '../../services/pets/getPets'
import { Skeleton } from '../../components/common/Skeleton'
import { useQuery } from '@tanstack/react-query'

export function Pets() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-pets'],
    queryFn: () => getPets(),
  })

  return (
    <Grid>
      <div className={styles.container}>
        <Header />
        {isLoading && (
          <Skeleton containerClassName={styles.skeleton} count={10} />
        )}
        <main className={styles.list}>
          {data?.items?.map((pet) => (
            <Card
              key={pet.id}
              href={`/pet/${pet.id}`}
              text={pet.name}
              thumb={pet.photo}
            />
          ))}
        </main>
      </div>
    </Grid>
  )
}
