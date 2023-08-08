using System.Net;
using Shared.DTOs;

namespace BLL.Mappers;

public static class CommonResponseMapper<T>
{
    public static CommonResponse<T> GetResponse(T data, HttpStatusCode statusCode)
    {
        return new CommonResponse<T>
        {
            Data = data,
            Status = (int)statusCode,
            Message = $"{Enum.GetName(statusCode)}"
        };
    }
}
