<h3>Talent submission</h3>
<p> Name: {{ $firstName }} {{ $lastName }} </p>
<p> Email: {{ $email }} </p>
<p> Stage Name: {{ $stageName }} </p>
<p> Country: {{ $country }} </p>
<p> City: {{ $city }} </p>
<br/>
<p>Previous Works</p>
<table>
    @foreach($previousWorkLinks as $link)
    <tr>
        <td>
            <a target="_blank" href="{{ $link }}">{{ $link }}</a>
        </td>
    </tr>
    @endforeach

</table>

<br/>
<p>Social Medias</p>
@foreach($socialMediaLinks as $link)
<table>
    <tr>
        <td>
            <a target="_blank" href="{{ $link }}">{{ $link }}</a>
        </td>
    </tr>
</table>
@endforeach
