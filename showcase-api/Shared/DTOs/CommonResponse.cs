using System.Net;

namespace Shared.DTOs;

public class CommonResponse<T>
{
    public int Status { get; set; }
    public required string Message { get; set; }
    public T? Data { get; set; }
}
