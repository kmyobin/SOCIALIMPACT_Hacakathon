import React from 'react'
import PageTemplate from '../layout/PageTemplate';
import ListContent from '../components/list/ListContent';
function ListPage() {
  return (
    <PageTemplate content={<ListContent />} />
  );
}

export default ListPage
