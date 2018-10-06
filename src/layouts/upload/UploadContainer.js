import Upload from './Upload'
import { drizzleConnect } from 'drizzle-react'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    BlocUSign: state.contracts.BlocUSign,
    drizzleStatus: state.drizzleStatus
  }
}

const UploadContainer = drizzleConnect(Upload, mapStateToProps);

export default UploadContainer;
