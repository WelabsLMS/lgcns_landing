import Form from '@/components/page/form/form'
import Military from '@/components/page/form/Military'
import Personal from '@/components/page/form/Personal'
import React from 'react'

export default function page() {
    return (
        <>
            <Form/>
            <Personal/>
            <Military/>
        </>
    )
}
