//complicated topic

type DataState = {
  status: LoadingStatus;
  error?: Error;
  data?: number;
}

enum LoadingStatus {
  Loading = 'loading...',
  Error = 'error',
  Success = 'success',

}

function handleData(state: DataState): string {
  switch (state.status) {
    case LoadingStatus.Loading:
      return LoadingStatus.Loading;
    case LoadingStatus.Error:
      return LoadingStatus.Error;
    case LoadingStatus.Success:
      return state.data?.toString() || 'unknown';
    default:
      return 'unknown';
  }
}

