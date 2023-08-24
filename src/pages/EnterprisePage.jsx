import React from 'react'
import PageTemplate from '../layout/PageTemplate'
import EnterpriseContent from '../components/enterprise/EnterpriseContent'
function EnterprisePage() {
  return (
    <PageTemplate content={<EnterpriseContent/>}/>
  )
}

export default EnterprisePage
