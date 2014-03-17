json.array!(@membercards) do |membercard|
  json.extract! membercard, :id, :name
  json.url membercard_url(membercard, format: :json)
end
