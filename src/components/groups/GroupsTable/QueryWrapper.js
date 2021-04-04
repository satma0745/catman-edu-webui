import { useAllQuery } from 'api/groups'

import { Loadable } from 'components/common'
import Presentation from './Presentation'

const QueryWrapper = (props) => {
  const { isLoading, groups } = useAllQuery()

  return (
    <Loadable loaded={!isLoading}>
      <Presentation {...props} groups={groups} />
    </Loadable>
  )
}

export default QueryWrapper
