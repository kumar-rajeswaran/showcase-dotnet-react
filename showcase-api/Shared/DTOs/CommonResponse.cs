using System.Net;

namespace Shared.DTOs;

public class CommonResponse<T>
{
    public int Status { get; set; }
    public string Message { get; set; }
    public T Data { get; set; }
}
